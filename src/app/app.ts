import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Cadastro } from './components/cadastro/cadastro';
import { ListaFuncionarios } from './components/lista-funcionarios/lista-funcionarios';
import { FormularioFuncionarios } from './components/formulario-funcionarios/formulario-funcionarios';
import { Enderecos } from './components/enderecos/enderecos';
import { Contatos } from './components/contatos/contatos';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{}
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'funcionarios', component: ListaFuncionarios },
  { path: 'funcionarios/novo', component: FormularioFuncionarios },
  { path: 'enderecos', component: Enderecos },
  { path: 'contatos', component: Contatos },
  { path: '**', redirectTo: 'login' }
];