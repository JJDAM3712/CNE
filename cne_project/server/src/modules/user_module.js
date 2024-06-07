import jwt from 'jsonwebtoken';

const JWT_SECRET = 'clavesecreta';

export const generateToken =  (id) => {
  const expiresIn = '1d';
  const token = jwt.sign({ id }, JWT_SECRET, {expiresIn});
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(405).json({mensaje: "Token invalido"})
  };
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = { id: data.id };
    next();
  } catch (error) {
    console.error('error')
    if (error.name === 'TokenExpiredError') {
      return res.status(402).json({ mensaje: "El token ha expirado" });
    } else {
      console.error('error')
      return res.status(401).json({ mensaje: "Token inválido" });
    }
  }
};