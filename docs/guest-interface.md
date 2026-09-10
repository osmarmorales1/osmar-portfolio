# Optional public guest interface

The adapter is included so the frontend can be understood and extended. It does not expose the private backend source or turn a static deployment into an agent runtime.

`VITE_PUBLIC_AGENT_ORIGIN` must be a plain HTTPS origin with no credentials, path, query, or fragment. When absent or invalid, the live component is not mounted. There is no default remote inference endpoint.

The current compatible service shape is:

| Surface | Purpose |
| --- | --- |
| `GET /guest/chat/ely` | Voice-ready Home conversation; the backend admits a new visitor when needed |
| `GET /guest/new?agent=ely` | Native new-conversation form within the current guest workspace |
| Assigned `/guest/chat/ely/...` path | Open an existing conversation |
| `GET /guest/computer/` | Session-bound computer viewer |
| `POST /guest/end` | End the current isolated guest session |

The `ely` path segment is a legacy route identifier in the interface, not a person or a credential. UI labels call the experience a cloud agent.

The native conversation iframe exchanges a small set of `portfolio:*` messages. The parent verifies the exact configured origin and iframe window, validates the reported guest path, and uses the explicit route to refresh an existing session. Read the component for the complete event shapes. Messages are navigation/task handoffs, not an authorization mechanism.

The backend must issue its own guest identity/session binding; enforce quotas, bounded model capabilities and allowed browser destinations; prevent access to owner sessions or private networks; and validate all submitted requests independently. Microphone behavior requires HTTPS, explicit browser consent, and a separately implemented speech/model service. The conversation iframe delegates microphone and autoplay permissions to its configured origin so asynchronous spoken replies can play after the visitor starts Talk. The computer viewer does not receive these audio permissions.

For the Buzz community, use the current public invitation from the hosted portfolio. Native visitors use their own identity. Their community posts are visible to community members. This repository contains neither membership signers nor rotating invitations.
