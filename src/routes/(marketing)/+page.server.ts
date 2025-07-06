import type { PageServerLoad } from "./contact_us/$types"

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()
  return {
    session,
  }
}
