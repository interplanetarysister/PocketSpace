# PocketSpace for Meta Quest

**Digital worlds made tangible.** PocketSpace is a cross-device prototype for sharing public websites, media, teaching materials, guestbooks, and spatial billboards through virtual phones, VR panels, and ordinary mobile/desktop browsers.

> Independent concept project targeting Meta Quest compatibility; not an official Meta product or partnership.

## Try the concept

**Live demonstration:** https://pocketspace-quest-demo.interplanetary-fund.workers.dev/

Use the site in a standard browser to see the floating panel and sample cards. Open it in a WebXR-capable Meta Quest Browser and choose **Enter VR** to test immersive viewing.

### Experimental desktop screen mirroring

1. On Quest, open the demo and press **Receive screen** to get a 12-character code.
2. On a Windows, macOS, or Linux desktop browser, open the same URL.
3. Type the code and click **Share a screen / window**.
4. Select the window or screen you want to share; the receiver shows the stream in the Live Screen Mirror card.
5. Stop sharing when done. This is opt-in and does not automatically make a private stream public.

**Limitations:** WebRTC peer connection success depends on networking/NAT traversal. This demo only configures public STUN, not a production TURN relay. Desktop capture permissions are browser-controlled. Full-system iPhone/Android capture requires separately authorized native companion software. The WebXR mode uses 2D panels, not real Meta avatars or multiplayer.

## Development

- Node.js 20+ (Node 22 is a good development baseline).
- Cloudflare Wrangler for Worker and Durable Object signaling.
- Browser WebXR/WebGL for the current Quest panel.
- WebRTC and desktop browser screen capture for experimental pairing.

```bash
npm install
npm test
npm run check
npm run dev
```

Open the Wrangler local URL to preview. See `docs/roadmap.md` for upcoming public billboards, phone AR, guestbooks, graffiti walls, spatial loudspeakers and social features.

### Deployment and safeguards

Default `wrangler.jsonc` deploy target is **pocketspace-quest-staging**, separate from the live prototype. Run `npm run deploy:staging` only after configuring a Cloudflare account; it creates/updates that staging Worker. Production is intentionally a separate manual action (`npm run deploy:production`) and should only occur after staging verification. The live iFund application is **not** part of this repository.

No GitHub Actions, automatic APK builds, or scheduled deployments are installed.

## Public content and safety design

Public content must be intentionally published item by item. Visitors with a supported phone or desktop should be able to see the same public content as VR users without buying accessories. Locational discovery, Bluetooth proximity and microphone broadcasting require explicit setup/OS permissions as applicable, and audio broadcasts need a separate opt-in with nearby viewers able to mute it. Guestbooks and graffiti walls require reporting, moderation and host controls.

## License

MIT; see [LICENSE](LICENSE). Third-party Meta, Apple, Google, Logitech, or other SDKs/assets have their own usage terms and are not included under this project's MIT license.
