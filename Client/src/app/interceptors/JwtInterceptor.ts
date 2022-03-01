import { Injectable } from "@angular/core";
import { JWTService } from "../services/jwt.service";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwt_service: JWTService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.jwt_service.getToken();

    if (token) {

      req = req.clone({
        url: req.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    }

    return next.handle(req);

  }
}
