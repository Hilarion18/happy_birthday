import { IReq, IRes } from './common/types';
import response from '@src/util/response/response';
import TimezoneService from '@src/services/TimezoneService';

// **** Functions **** //

/**
 * Get list timezones
 */
async function getListTimezone(req: IReq, res: IRes) {
  try {
    const result = await TimezoneService.getListTimezone()
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
  getListTimezone,
} as const;
