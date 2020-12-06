const validate = (schema, validateData) => {
    try {
        const error = schema.validate(validateData);
        return !error;
    } catch (error) {
        return error;
    }
};

export default objectOfValidation => (req, res, next) => {
    if (validate(objectOfValidation.body, req.body))
        if (validate(objectOfValidation.params, req.params)) {
            next();
            return;
        }
    return res.status(404).json('validateError');
};
