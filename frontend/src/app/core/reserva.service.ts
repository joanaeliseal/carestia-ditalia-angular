import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reserva {
  id?: number; // necessário para fazer DELETE
  nome: string;
  telefone: string;
  data: string;
  horario: string;
  pessoas: number;
}

@Injectable({ providedIn: 'root' })
export class ReservaService {
  private apiUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) {}

    // POST - Enviar reserva
  enviarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }

  // GET - Listar todas as reservas
  getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

  // DELETE - Cancelar reserva por ID
  deletarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

//   enviarReserva(reserva: Reserva): Observable<Reserva> {
//     return this.http.post<Reserva>(this.apiUrl, reserva);
//   }
// }
