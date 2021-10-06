function asyncErrorBoundary(delegate, defaultStatus) {
    return (requires, response, next) => {
        Promise.resolve()
            .then(() => delegate(requires, response, next))
            .catch((error) => {
                const { status = defaultStatus, message = error } = error || {};
                next({
                    status,
                    message,
                });
            });
    };
}

module.exports = asyncErrorBoundary;