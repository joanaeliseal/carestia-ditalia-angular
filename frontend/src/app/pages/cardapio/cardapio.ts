import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardapio.html',
  styleUrls: ['./cardapio.css']
})
export class Cardapio {
  cardapio = [
    {
      titulo: 'Parmegiana da casa',
      descricao: 'Carne fatiada, empanada, queijo parmesão e molho de tomate.',
      preco: 'R$ 44,90',
      imagem: 'assets/img/cardapio/parmegiana.png'
    },
    {
      titulo: 'Pizza Margherita',
      descricao: 'Tomate, queijo e manjericão. Clássica e deliciosa.',
      preco: 'R$ 55,90',
      imagem: 'assets/img/cardapio/pizza-marguerita.png'
    },
    {
      titulo: 'Gellato',
      descricao: 'Sorvete italiano tradicional.',
      preco: 'R$ 12,90',
      imagem: 'assets/img/cardapio/gellato.png'
    },
    {
      titulo: 'Tiramisú',
      descricao: 'Sobremesa italiana com café.',
      preco: 'R$ 20,50',
      imagem: 'assets/img/cardapio/tiramisu.png'
    },
    {
      titulo: 'Struffoli',
      descricao: 'Massa doce frita em bolinhas.',
      preco: 'R$ 15,90',
      imagem: 'assets/img/cardapio/struffoli.png'
    },
    {
      titulo: 'Nhoque de batata',
      descricao: 'Tradicional nhoque caseiro.',
      preco: 'R$ 32,90',
      imagem: 'assets/img/cardapio/nhoque.png'
    },
    {
      titulo: 'Ravioli de mussarela búfala',
      descricao: 'Com molho de tomate.',
      preco: 'R$ 40,00',
      imagem: 'assets/img/cardapio/ravioli.png'
    },
    {
      titulo: 'Vinho Branco (garrafa)',
      descricao: 'Vinho Chardonnay encorpado e suave.',
      preco: 'R$ 72,90',
      imagem: 'assets/img/cardapio/vinho.png'
    },
    {
      titulo: 'Sucos variados',
      descricao: 'Laranja, limão, pêssego, acerola e manga.',
      preco: 'R$ 8,50',
      imagem: 'assets/img/cardapio/sucos.png'
    },
    {
      titulo: 'Coca Cola Lata',
      descricao: '',
      preco: 'R$ 6,50',
      imagem: 'assets/img/cardapio/coca cola.png'
    },
    {
      titulo: 'Guaraná Lata',
      descricao: '',
      preco: 'R$ 6,50',
      imagem: 'assets/img/cardapio/guarana.png'
    },
    {
      titulo: 'Coca Zero Lata',
      descricao: '',
      preco: 'R$ 6,50',
      imagem: 'assets/img/cardapio/coca_zero.png'
    },
  ]
}
