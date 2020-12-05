const validate = (schema, validateData) => {
    try {
        const error = schema.validate(validateData);
        console.log(error);
        console.log(!error);
        return !error;
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = objectOfValidation => (req, res, next) => {
    if (validate(objectOfValidation.body, req.body))
        if (validate(objectOfValidation.params, req.params)) next();
    return res.status(404).json('validateError');
};
