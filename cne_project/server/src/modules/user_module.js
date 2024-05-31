import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_aqui';

export const generateToken =  (id) => {
  const token = jwt.sign({ id }, JWT_SECRET);
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(403);

  try {
    const data = verify(token, JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};