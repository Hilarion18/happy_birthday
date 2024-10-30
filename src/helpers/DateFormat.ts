function isValidDateFormat(dateString: string) {
    // Parse the date string to a Date object
    const date = new Date(dateString);
    const today = new Date();

    // Regular expression to match the format YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
  
    // Check if the date string matches the pattern
    if (!regex.test(dateString)) {
      return false;
    }

    // Split the date string into components
    const [year, month, day] = dateString.split("-").map(Number);

    // Check if month is within 1 to 12 range
    if (month < 1 || month > 12 ) {
        return false;
    }

    return date.getFullYear() === year && 
           date.getMonth() + 1 === month && 
           date.getDate() === day &&
           date <= today;
  }
  
// **** Export default **** //
export default {
    isValidDateFormat,
  } as const;
  