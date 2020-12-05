const validate = (schema, validateData) => {
    try {
        const error = schema.validate(validateData);
        return !error;
    } catch (error) {
        return error;
    }
};

module.exports = objectOfValidation => (req, res, next) => {
    if (validate(objectOfValidation.body, req.body))
        if (validate(objectOfValidation.params, req.params)) next();
    return res.status(404).json('validateError');
};
