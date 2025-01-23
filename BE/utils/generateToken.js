import jwt from 'jsonwebtoken'
export function generateToken(user) {
    let id= user._id || user.id;
    let accessToken=jwt.sign({
        id,
        role: user.role
    },process.env.SECRET_KEY,{
        expiresIn: '24h'
    })
    let refreshToken=jwt.sign({
        id,
        role: user.role
    },process.env.SECRET_KEY,{
        expiresIn: '2d'
    })
    return {accessToken,refreshToken}
}
