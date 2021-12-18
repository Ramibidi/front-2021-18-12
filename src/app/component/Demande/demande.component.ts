import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder, RequiredValidator } from '@angular/forms';
import { Demande } from "../../demande";
import { DemandeService } from "./demande.service";


@Component({
  selector: 'app-demande',
  templateUrl: 'demande.component.html',
  styleUrls: ['demande.css']
})
export class DemandeComponent implements OnInit {

  

  demande: Demande = {
    datedebut: '',
    datefin: '',
    raison: '',
    adresse: '',
   
  };
  addDemandeForm: any;

  constructor(private formBuilder: FormBuilder,
    private demandeService: DemandeService
    
  ) { }

  ngOnInit(): void {
    localStorage.getItem('talan_userId')
    
    

    this.addDemandeForm = this.formBuilder.group({
      DateDebut: ['', Validators.required ],
      DateFin: [''],
      raison: [''],
      projet: [''],
      adresse: [""]
    })
  }

  addDemande() {
    console.log(this.addDemandeForm.value);

    let demande = this.addDemandeForm.value;
    demande['user'] = localStorage.getItem('talan_userId');
    //data={ ...this.addDemandeForm.value, userId:localStorage.getItem('clé').}
    this.demandeService.addDemande(demande).subscribe(
      (res: any) => {
        console.log(res);
        window.alert('Demande bien envoyer');

      },
      (err: any) => {
        console.log(err);
      }
    )

  }



}
