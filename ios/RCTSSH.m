#import <Foundation/Foundation.h>
#import <NMSSH/NMSSH.h>
#import "RCTSSH.h"

@implementation RCTSSH

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(
                  execute:(NSString *)host
                  username:(NSString *)username
                  password:(NSString *)password
                  command:(NSString *)command
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
  // Connect to the remote server. 
  NMSSHSession *session = [NMSSHSession connectToHost:host withUsername:username];
  if (!session.isConnected) {
    NSError *error = [[NSError alloc] initWithDomain:@"RCTSSH" code:404 userInfo:@{@"error": @"Cannot connect"}];
    return reject(@"connection_error", @"Could not connect ", error);
  }

  // Authenticate using password. 
  BOOL isAuthenticated = [session authenticateByPassword:password];
  if (!isAuthenticated) {
    NSError *error = [[NSError alloc] initWithDomain:@"RCTSSH" code:401 userInfo:@{@"error": @"Cannot authenticate"}];
    return reject(@"authentication_error", @"Could not authenticate ", error);
  }

  // Execute the command. 
  NSError *error = nil;
  [session.channel execute:command error:&error];

  if (error) {
    return reject(@"command_failed", @"Error executing command", error);
  }

  // Disconnect from the server. 
  [session disconnect];

  resolve(@"Success");
}

@end