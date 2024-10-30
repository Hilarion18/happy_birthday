import { IReq, IRes } from './common/types';
import response from '@src/util/response/response';
import CountryService from '@src/services/CountryService';

// **** Functions **** //

/**
 * Get list timezones
 */
async function getListCountry(req: IReq, res: IRes) {
  try {
    const result = await CountryService.getListCountry()
    if (result.flag === 200) {
      return response.success('success', res, result.data)
    } else {
      return response.error(result.message, res, result.flag)
    }
  } catch (error) {
    return response.serverError("Server error", res, 500)
  }
}

// **** Export default **** //
export default {
  getListCountry,
} as const;
