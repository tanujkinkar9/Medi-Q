const requireRole = (...allowedRoles) => {
    return (req,res, next) => {
        if(!allowedRoles.imcludes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied'})
        }
        next()
    }
}

module.exports = { requireRole }