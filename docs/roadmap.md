# PocketSpace development roadmap

## Principle: access without additional accessories

All intentionally published public content must remain viewable from a supported
phone or desktop browser. VR headsets, controllers, styluses and haptic gear
enhance the interaction, but never gate access to public posts.

## Current demonstrator (Cloudflare WebXR)

- Virtual phone and swipe-through cards with sample content.
- Pin a public screen beside the avatar or in front of the viewer.
- Switch between public/private presentation, including teaching mode.
- Basic immersive WebXR display using geometric panels (not real Meta avatars).
- Experimental desktop-browser screen capture and room-code WebRTC relay signaling.

This is a *prototype*: no real user accounts, persistence, directory,
headset-to-headset networking, friend verification, location sharing,
Bluetooth pairing, content review or production-grade TURN server yet.

## First playable milestone

1. Real multiplayer avatar representation and proximity for a *shared VR room*.
2. Persistent public/private content objects tied to authenticated owners.
3. Host-placed public spatial billboards visible to anyone in that room.
4. Phone browser viewer plus QR-code discovery; scan-to-open requires no VR gear.
5. Viewer volume/mute controls, and per-item publishing controls.
6. Single-click immersive onboarding, compatible controller + hand tracking.

## Next milestones

- Guest registry book, graffiti/signature wall and public message board.
- Mobile augmented-reality alignment using markers before geolocation-based discovery.
- Nearby friends through mutual opt-in proximity and authorized social graphs.
- Opt-in broadcaster mode for microphones and permitted media audio;
  no background broadcasting; spatial falloff and viewer mute.
- Creator teaching tools, annotations, screen handoff, multi-panel organization.
- Platform-authorized media players and feeds, not unauthorized rebroadcasts.
- Native Quest + iOS/Android capture companions if full-device mirroring is needed.

## Privacy, moderation and accessibility

- Public visibility must be selected by the owner for each item.
- Private screen mirroring is **never** auto-published to bystanders.
- A participant can hide or mute a nearby billboard/speaker without the owner's approval.
- Location discovery is optional and not required for local virtual-space viewing.
- Respect platform age restrictions, youth protections and location/Bluetooth OS permissions.
- Require deliberate activation of audio broadcast and clear UI indicators.
- Graffiti/guestbook posting needs report, block, moderation and deletion controls.
- Cross-device content uses captions/transcripts and keyboard/touch equivalents.

## Build/deploy policy

- GitHub is the source of truth. Changes go to review branches and get validated
  before releasing.
- No GitHub Actions or automatic APK build is required for this web demo.
- `wrangler.jsonc` points to `pocketspace-quest-staging` by default.
- Production is currently deployed as `pocketspace-quest-demo`, independently
  of Interplanetary Fund. Do not overwrite iFund Workers or deploy production
  without testing staging.
