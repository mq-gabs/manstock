export const formatQuery = (obj: any) => {
  let query = '?';
  Object.keys(obj).map(key => {
    query += `${key}${obj[key] ? `=${obj[key]}` : ''}&`;
  })

  if (query === '?') {
    return '';
  }

  return query;
}