
import * as jose from 'jose'

export async function verifyJwt(token: string, JWS: any) {
  
  let JWTS = new TextEncoder().encode(JWS);
  let keyBytes = Uint8Array.from(atob(JWS), c => c.charCodeAt(0));
  

  try {
    return await jose.jwtVerify(token, keyBytes)
  } catch (error) {
    console.error('JWT verification failed:', error);
    return false;
  }
}