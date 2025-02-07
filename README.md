Notes on each provider:

- PostHog has by var the best JSDocs, with LogRocket having a small amount, and mixpanel and amplitude having none.
- Mixpanel doesnt even have types built in
- Posthog and mixpanel's quickstart guides involved setting env vars, everyone else just hard coded the token
- PostHog had the easiest proxy that "just worked". Amplitude required fiting with their config and it seems to ignore the setting anyway, LogRocket's requirements were just dumb and it doesn't even work. MixPanel worked just fine.
