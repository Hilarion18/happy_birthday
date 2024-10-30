import Timezone from '@src/models/Timezone';

// **** Functions **** //

/**
 * Finding one user.
 */
async function getListTimezone() {
  try {
    const listTimezone = await Timezone.findAll()
    return listTimezone
  } catch (error) {
    return error
  }
}

// **** Export default **** //
export default {
  getListTimezone,
} as const;
