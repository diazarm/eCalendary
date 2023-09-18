  export const formattedDailySchedules = (values, obj) => {
    const result = [];
    for (const item of values) {
      const data = obj.find(el => el.value == item);
      if (data) {
          result.push(data.label);
      }
    }
    return result;
  };
  