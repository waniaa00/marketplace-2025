export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skDxpzcKnH28HwJdVt1zNvP9jxvl4Lamm5vlFYM1q0epQKxa23Ay0H9oiBwlNeZTot5aZs2crhou2diOrVnD07tvzwCdOyC63hUZR1cUy3u1wet8O1OpuVS0bSWaJnFXMUbi4T7V6asv9Fx1HywqnpTM35mBNJGmibQn52mHLRZ4dT54RyUZ",
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
