import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo) {
    return {
     'has-error': this.verificaValidTouched(campo),
     'has-feedback': this.verificaValidTouched(campo)
   }
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      const validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        this.resetaDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`).map(
          dados => dados.json()).subscribe(
            dados => {
              this.populaDadosDoForm(dados, form);
            }
          );
      }
    } 
  }

  populaDadosDoForm(dados, formulario) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
