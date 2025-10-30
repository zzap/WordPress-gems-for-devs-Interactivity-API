# WordPress gems for devs: Interactivity API

Repository for code examples and resources used in the "WordPress gems for devs: Interactivity API" talk.

| Event  | Date | Branch | Links |
| --- | --- | --- | --- |
| IPC Munich 2025 | 30 October 2025 | [conf/IPC-Munich-2025](https://github.com/zzap/WordPress-gems-for-devs-Interactivity-API/tree/conf/IPC-Munich-2025) | [Event](https://phpconference.com/php-core-coding/wordpress-interactivity-api/) \| [Slides](https://docs.google.com/presentation/d/1s4px3ylZ_zzfe7Ww34eSVoLTvPexwUZO_HWce4r6t8k/edit?usp=sharing) |
| IPC Berlin 2025 | 4 June 2025 | [conf/IPC-Berlin-2025](https://github.com/zzap/WordPress-gems-for-devs-Interactivity-API/tree/conf/IPC-Berlin-2025) | [Event](https://phpconference.com/php-core-coding/wordpress-interactivity-api/) \| [Slides](https://docs.google.com/presentation/d/1-DtY6MJHO7WbGcttfrIl-vegCNZp2lGorAj5-qnSwZQ/edit?usp=sharing) |
| WordCamp Lisboa 2025 | 17 May 2025 | [conf/WordCamp-Lisboa-2025](https://github.com/zzap/WordPress-gems-for-devs-Interactivity-API/tree/conf/WordCamp-Lisboa-2025) | [Event](https://lisboa.wordcamp.org/2025/session/wordpress-gems-for-devs-interactivity-api/) \| [Slides](https://docs.google.com/presentation/d/13qQx0pv41uWfVXPGjgP_9d0MkXuXIbUkoyNdL-ayYt4/edit?usp=sharing) \| [Video](https://wordpress.tv/2025/05/19/wordpress-gems-for-devs-interactivity-api/) |

### What problems does it solve?

- Compatibility with PHP hooks.
- Inter-block communication.
- Site-wide features such as client-side navigation.

### Reference

- [Interactivity API Reference](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
  - [The Reactive and Declarative mindset](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)
    - [List of Directives](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#list-of-directives)
  - [Understanding global state, local context and derived state](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)
    - [The store](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#the-store)
  - [Server-side rendering: Processing directives on the server](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)
    - [Server functions](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#server-functions)
- [WP_Interactivity_API_Directives_Processor](https://developer.wordpress.org/reference/classes/wp_interactivity_api_directives_processor/)
- [@wordpress/create-block-interactive-template](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-interactive-template/)

### Examples

- [The movie demo](https://wpmovies.dev/), [GitHub repo](https://github.com/WordPress/wp-movies-demo)
- [Countdown](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
- [Instant Search](https://github.com/r-chrzan/instant-search-interactivity)
- [Todo list](https://github.com/ahsanshaheen199/interactive-todos/tree/main)
- [Interactivity API showcase](https://github.com/WordPress/gutenberg/discussions/55642)

Examples in production:

- [mainostoimistot.fi](https://mainostoimistot.fi/) - [Query Loop Filters](https://github.com/samikeijonen/query-filter/tree/seravo) by [Sami Keijonen](https://github.com/samikeijonen/), forked from [humanmade/query-filter](https://github.com/humanmade/query-filter)
- [Podcaster Plus](https://www.podcasterplus.com/) plugin by [Dan Maby](https://github.com/danmaby) and [Nathan Wrigley](https://nathanwrigley.com/)

### Resources

- [Interactivity API: Roadmap](https://github.com/WordPress/gutenberg/discussions/52904)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/#how-to-create-interactive-blocks)
- [Interactivity API discussions](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api)
- [Changelog - Tracking Breaking Changes in the Interactivity API](https://github.com/WordPress/gutenberg/discussions/52906)
- [Getting Started - and other learning resources](https://github.com/WordPress/gutenberg/discussions/52894)

#### History

The idea of using the declarative method to bridge the connection between frontend and backend came from the [Cloudfest 2022 Hackathon project](https://hackathon.cloudfest.com/cloudfest-hackathon-2022-greatest-hackathon-ever/), [Bento + WordPress](https://www.alainschlesser.com/using-bento-components-in-gutenberg-blocks/), which was led by [Alain Schlesser](https://github.com/schlessera) and [Pascal Birchler](https://github.com/swissspidy).

### Equivalents in other PHP frameworks

- Laravel - [Livewire](https://livewire.laravel.com/) using AlpineJS
- Symfony UX - [Live components](https://ux.symfony.com/live-component), primarily built on top of [Turbo](https://turbo.hotwired.dev/) and [Stimulus](https://stimulus.hotwired.dev/), which are part of the [Hotwire](https://hotwired.dev/) framework.
- Phoenix [LiveView](https://hexdocs.pm/phoenix_live_view/welcome.html)
