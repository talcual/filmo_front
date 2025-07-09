
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { verifyJwt } from './lib/utils/jwt';


export async function middleware(request: NextRequest) {
  
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  console.log('Running middleware');
  console.log('Token Local', token)

  let JWS = '...';

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(!verifyJwt(token, JWS)){
    console.log('Token no válido, redirigiendo a /login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard','/dashboard/:path*', '/perfil/:path*'], // Define aquí tus rutas protegidas
};