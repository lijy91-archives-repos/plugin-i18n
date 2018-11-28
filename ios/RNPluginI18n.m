#import "RNPluginI18n.h"

@implementation RNPluginI18n

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

- (NSString*) deviceLocale
{
    NSString *language = [[NSLocale preferredLanguages] objectAtIndex:0];
    return language;
}

- (NSString*) deviceCountry
{
    NSString *country = [[NSLocale currentLocale] objectForKey:NSLocaleCountryCode];
    return country;
}

- (NSDictionary *)constantsToExport
{
    return @{
             @"deviceLocale": self.deviceLocale ?: [NSNull null],
             @"deviceCountry": self.deviceCountry ?: [NSNull null],
            };
}

RCT_EXPORT_MODULE()

@end

