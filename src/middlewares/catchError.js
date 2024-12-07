
export const catchError = (fn) => (req, res, next) => {
return Promise.resolve(fn(req, res, next)).catch(next); // Pass errors to the error handling middleware
};