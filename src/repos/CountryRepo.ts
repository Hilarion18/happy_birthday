import Country from '@src/models/Country';

// **** Functions **** //

/**
 * Finding one user.
 */
async function getListCountry() {
  try {
    const listCountry = await Country.findAll()
    return listCountry
  } catch (error) {
    return error
  }
}

// **** Export default **** //
export default {
  getListCountry,
} as const;
