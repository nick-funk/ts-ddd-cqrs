const computeCORSPolicy = () => {
  const allowed = process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim());

  return {
    origin: (origin, callback) => {
      // origin is not in list of valid origins, reject
      if (allowed.indexOf(origin) === -1) {
        return callback(new Error("The CORS policy for this site does not allow access from the specified origin."), false);
      }

      // origin is in list, let it through!
      return callback(null, true);
    } 
  }
}

export default computeCORSPolicy;