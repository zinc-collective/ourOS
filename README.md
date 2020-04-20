# _ourOS_

Computing has evolved. Personal computers are being replaced by disposable
devices that are impossible to upgrade or repair; with a yearly incremental
release cadence.

All of these devices want you to use apps bought from their store that send your
data to their advertisers.

These platform companies are grounded in the belief that regular people are not
smart enough, not capable enough, not self-aware enough to operate their own
computer.

So fine. Fuck them.

We'll use theirs.

## A Personal OS for the Public Cloud

_ourOS_ is a single-user federated operating system that runs on public cloud
providers without giving. There are two interfaces to _ourOS_:

1. The [Human Interface], where you launch and operate _ourOS_ apps.
2. The [Inter-Computer Interface], where your _ourOS_ installation sends data to
   and receives data from other _ourOS_ installations.

### Human Interface

All _ourOS_ apps are available via a web browser, and some have native apps for
Mac, Linux, iOS, and Android devices.

Because _ourOS_ delivers its human interface through a web browser, apps have near-infinite flexibility. Everything from [gestures] to [gamepads] to [virtual reality] to [payments] and so many more [broadly available web apis].

[gestures]: https://developer.mozilla.org/en-US/docs/Web/API/GestureEvent
[gamepads]: https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API
[virtual reality]: https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API
[payments]: https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API
[broadly available web apis]: https://developer.mozilla.org/en-US/docs/Web/API

### Inter-Computer Interface

Every _ourOS_ instance has a public `Port` that listens for [events] from the broader Web. Events may come in as [Webhooks] or [WebSockets] and are passed through to [event handlers] registered by _ourOS_ apps.

[Webhooks]: https://en.wikipedia.org/wiki/Webhook
[WebSockets]: https://en.wikipedia.org/wiki/WebSocket

## Get Started

### Installing _ourOS_

_ourOS_ is installed onto a public cloud provider, like [Glitch] or [Heroku].
Once you've installed _ourOS_, you can use it from any device with a browser.

[glitch]: https://glitch.com/
[heroku]: https://www.heroku.com/

### Installing Apps

Apps on _ourOS_ are installed by adding them to your _ourOS_ installation's
`package.json` and configured in `apps.js`. The default _ourOS_ distribution
comes bundled with a number of small apps designed to bring the benefits of
cloud computing to you.

### Preinstalled Apps

1. **RecipeBox** — Save, remix, and share recipes (and their delicious results!)
   with your friends and family!
1. **Koype** — Your thoughts are yours. Keep them and share them with the
   public.
1. **PostNote** — Collect pages, pictures, music, and videos from around the
   web; organize them; and (if you want!) share them with friends.
1. **SlipVector** — Do you have what it takes to govern a planetary system? Find
   out in this space colony simulator where you tell the story of a
   post-scarcity humanity as it reaches for the stars.

### Writing Your Own Apps

_ourOS_ is written in JavaScript, the _lingua franca_ of computers. Both the
[Human Interface] and the [Inter-Computer Interface] are built using [web
standards], so apps written for _ourOS_ are portable to other web platforms.

_ourOS_ apps use [Express] for their [Human Interface] and register [event handlers] for their [Inter-Computer Interface].

[web standards]: https://en.wikipedia.org/wiki/Web_standards
[human interface]: #human-interface
[inter-computer interface]: #inter-computer-interface
[Express]: https://expressjs.com/
[event handlers]: https://en.wikipedia.org/wiki/Event-driven_programming#Event_handlers
[events]: https://en.wikipedia.org/wiki/Event-driven_programming