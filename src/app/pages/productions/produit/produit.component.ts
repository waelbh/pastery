import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbThemeService, NbWindowService } from '@nebular/theme';
import { ProduitService } from '../../../venteSrvices/produit.service';
import { FamilleService } from '../../../stockServices/famille.service';
import { Famille } from '../../../modelsInt/famille';
import { MatpremService } from '../../../stockServices/matprem.service';
import { MatierePremiere } from '../../../modelsInt/matierePrem';
@Component({
  selector: 'ngx-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  currentTheme: string;
  themeSubscription: any;
  openProductForm: boolean = false;
  produits: any[] = [
    {
      "id": 2,
      "name": "Creme Vanille Au Amandes",
      "unit": "UNIT",
      "quantity": 34.00,
      "stockLimit": 12.00,
      "percentageMargin": 36,
      "unitPrice": 1.00,
      "unitPriceValidation": false,
      "prodCoast": 0.638,
      "photo": "https://files.meilleurduchef.com/mdc/photo/recette/gateau-anges-surprise/gateau-anges-surprise-640.jpg",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    }
    ,
    {
      "id": 1,
      "name": "Mille Feuille",
      "unit": "UNIT",
      "quantity": 96.00,
      "stockLimit": 10.00,
      "percentageMargin": 60,
      "unitPrice": 1.40,
      "unitPriceValidation": false,
      "prodCoast": 0.559,
      "photo": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    },
    {
      "id": 1,
      "name": "Mille Feuille",
      "unit": "UNIT",
      "quantity": 96.00,
      "stockLimit": 10.00,
      "percentageMargin": 60,
      "unitPrice": 1.40,
      "unitPriceValidation": false,
      "prodCoast": 0.559,
      "photo": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    },
    {
      "id": 1,
      "name": "Mille Feuille",
      "unit": "UNIT",
      "quantity": 96.00,
      "stockLimit": 10.00,
      "percentageMargin": 60,
      "unitPrice": 1.40,
      "unitPriceValidation": false,
      "prodCoast": 0.559,
      "photo": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    },
    {
      "id": 1,
      "name": "Mille Feuille",
      "unit": "UNIT",
      "quantity": 96.00,
      "stockLimit": 10.00,
      "percentageMargin": 60,
      "unitPrice": 1.40,
      "unitPriceValidation": false,
      "prodCoast": 0.559,
      "photo": "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa31fa99c-b47d-4833-9546-05ff95d3bba1.2Ejpeg/850x478/quality/90/crop-from/center/mille-feuille-a-la-vanille.jpeg",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    },
    {
      "id": 1,
      "name": "Mille Feuille",
      "unit": "UNIT",
      "quantity": 96.00,
      "stockLimit": 10.00,
      "percentageMargin": 60,
      "unitPrice": 1.50,
      "unitPriceValidation": false,
      "prodCoast": 0.559,
      "photo": "eJwBGhPl7HiclZB3NNuPv8Y/CEGNUtQoWkKN6rdGjAZtvwhi79p7BDFrq6IoqRjRoDFbM0aU2quD1qode7RCW1tVbOX2d+8595z75329/3zO+3We81xMX3wDLiPg2nCAigoAqP4ecDEHxAEMdGB6MB0DPZiekZHhEjMXKzMTEzMfB+dlruv8QkLX+QUFIWJytyCi0jcFBaVUpKShCnfv3hWWvKd+T1FNTumuAhUjIyMzEzMvKyuvgoigiML/m4v3ABs9EAKQaKiEAGo2Kho2qotugO9vR9r/NP1faAEqGhAdNfhvCLsMUFPR0FCDaGhpwbT/CamoaQAQGy37DTrpK0IPjBz9YzhkjNNrOYX/ffUBzCWrZuI0KheLXfr195mXCqCm+T/m/8hAtHR/M1E2gAagpqamAv31/Q9/zWzsN0D/0f5rxOEoLGN8MQsw0fyVsNGwAfeAA3pNbFupVXiaQD4+P1oAd0NrhLoEgQPRj/MG6npAvuFNMTcWozlVkYmHJff5TabkKACFQiq/bkowMaTBJ/gP6hgNHHoyCNntI1k5dQWhVokrpjEiwggcEIjIxwEBtCqq4oY0xiU6TeGAPyL7jUAD05SRusw2LdNVF1LSJ1AB4ZYzKtbMbdj1R1GGDVprzqnJ56hkuv+hjzYODDE83o8Irbsk7uvgBfPxbQhwks1eHi6LNKpkZp+dUKKDD0MOoQyNUARWHBq2QqbnPtOTjMjTyJFRB167fABEEg1VVl2HmjziqsLSO6gZHR9dSdiIITMJ2ky8EmJL6wIvW5Y2d3Rya0WKnOmZxeTPfndEJr9ciY4wlQnFf+vXp2GaehxPlWJpIA3/1DaR7eP7HLP+SgWDcFqVRBSh/XqQO8aktM//vdYBUXAbv3lAZAbhas0d9sv7jysergOZOAlTgEBY+zsAZVDF/3bwkofv/UDZxGUZdkCgIY90N07q4yeHhKW+D9Mws6SdZVxxfQu33YxqwyKOs+qmi0eh2LeYxbdnewZaI2/qGz9kLATRzszRtvuxhniTJMcOFbwhE0EM328ecWwZqQd5tQ1o7wEmPERUQ1uS0O+ZNgVvmk/KpM5Ef23v/PH749XSS3Olj3sHbbGXHtl422eKqS14BWY+RAlFu7fhlw805ruCDorvq3wM01DE/6kjz5XUn0NsxHfQO0YTTDDnhuQ+WKqY4GTCHzR9wHVSjuqXYyJKcHPKV+oDk/yv9dCicBGEyyjSZFHwikle9pNSFg7TUtt7+iB4hfWI2KAmKMSqZVdAjbN2k7AQz9U4vlUooJWluuJCqpmuXmX0gfKrMXixNcUdBm9HvTAwGCM38uW+tDkMrkRBDKktceAWRU59lNuQ9GkLCLMliC+Wnz4c55PukLl6FK/D/3GAO0iYm/LKgt1mvVMjqfCp0q2uzFIdLdR86Bey7DqLOB8yBeulcVzjGL3t9qGEq7HqfahMp77sU5MHtC95qPiWF0tVeW/vSKRGkXqrqx9ZJbjiQsTmfhHE+D/XOnpqKTAOH5lknBHUamDJXe6wmlfCPISZa2rN4FrOPk7j/hOd7L7MhULhN75W6TctMnyVBCh0SXxPbeFeSbBUTNBV/wcgEqH3Bz6aU8K0nCbDSP/0ciMDuQR6bShR+QLAaagIuQx4ud6EoXGSwxzsc2bp/wjHLjzP2ilALL5oLDhTt/OCVSP9u3UzpSv6Vu8T/8lIKDtrbwy68yOzWc7KaxXRw7HCFUUPVWarurHSMNsj6JcvKeXOT54vm8uzYZm+Rkqzt7Vel433vqFqs3dW0W7nbLB+653guZq8YBNUK680k49Vms9ZbzD1ZWX6o5X7Pi34iLIz43cUTv0u40xtaZkjR33ZHU3UDvnlg5T776dMWDOgm105nNrUa5nl8olXvqMFCR7ntgcbT9fzk1XKU5qeQHFZGHePKWMXZrT/vpzqol3xyxAdlENF2KWOpJ6hepRMvFSwarywpo+T79LWjq2t51UFGT7bW9Sa7IhliYLfng1z813/YERa0P/eQeQWPfn0cI3MNXLCv5J7tpq1+Kykobcq3JNHK8Ooubk9akVr2ojCAV/sX6S9xISIDqcy8uTt5sKGCiB9YEd3iD8ugAnmkHVmjcYPTOaXz8Ujd1KzHPXqOs+XCMWxs/Jhec4aK1ive0GVGpV1c8iKcdEd5aXIClXwJPHTuPnvyye5vxd7lbrLBi6ARPLzLhQTW1yCnLpdf1EMpciaRTucOnv5rRF//7uEJ0kszIhZkdxNnu/Nrsoxy/ISB6Xp0NwEG6BISe6qfksbJhaunuvu/Mv/V7HB81G3Fv0RzwGdt/UXAB3I/pAN30p9Sq3KQf3TgjTRbX6ivv2Ea//SMUnI7nVH7yUv5AXgH8wxn26VdeiGW7gcNk21Sy63s1sbe4XZdjQX5mEHHhTqjGUsqP5xNmluHv4lPvsu7bXfoyEcI62O4nCLI9YjwqHhVnFQmFybu5mjX29xqfUzgZmi1uBXB4lOL1+7WhjqKwEjj9VKt6zk5bWXFB5XHhqMZRkscHNu3eZ4KuBf4KnXEn6LYNqI8YC1BUjnjsfS965ETIK38M9M7NvNZbWRxR8/2ZkulQo3CzKSuiCTaWpMWpCkO2X+e7SV8qY/HyDM+nuJCjR4z3TNQYvO1MiIZ+Fp0KAP18ZIv61EVFSijYN35U+ezhJtRClgHpAZf4DWptuV9JgN9A+p4InXRs256L395+QyjiH8gkhADHoUuqEJ8a7JFRdtbR3/uiUu5Nw3xFrzZVQxaiB4iUQXtN/jWavSuB0QEVxhB65+vVNgoPulkKQcbImFwFcc3KHirdhFHl6ZWm++xjvL+69ry+K/X88Nx1dDsTJ9QnBtH4ZtT1H8aWqfbI7AazoOmW4X8+1V5cpdufAB86Y04CG8ZzSHMzVUtY/jjgbD9JcQ932o39BbWp1sYddzdk2+eK9PP2xOKWYZn9EU7++/fqayxrIyscrd1pFF3ghlkBaQbyqhG2/wCh1oz5JRd/6NC/79jkdxeKhKwQLpxVED6fIMi5z3Obb4N7L9Udtq31l41qhv2SbXJbcXNTslwUieBP0QAbGca0xRDXRJFVbr5k7k6eNLbE+/Qq0txmugsPoEWJevc5PUt1/bizMUTiIKWu9OiKzveTexKXcBnLQ1Fx3JBkTlrfoeZup8/kWxlSFvZqTy9DzjPsl/grOtW7OV/3Sm3gDP+qOtvHWMl0h/LQYAMAeTS2MUKhT7smGmUtDzt6Is5oust7z29p33CFCvoCaMj/NnR6VeRTJx3aohJUfA16co9dvW02NzHfOJ7ROcQBe8KV2qmOxFoBu5+k1lDSn1SM43glWTFOynzmf00kHto9YR/QVg/yTerH0jH18P6iN0/xw1yaBU7DB35Ba4k25csZrnBGRWwJWZf/jGY+15HrUFdP8UCTSCORvHz1HXHKCbBpc8ws0G507Y5VNHJuYioogT7VMWhsh0wd9kvZ39g2qzjpKOOlAsB0ZzyVAioB8szH20q1cznZJFTp46tDw4P7UkFT+xXwTuIWL34CQp4V2pf1xaZs5tPzOcKFAqrQ4tV1v/uXpV4veJhuBLjLvBQapcZ+jdQMPMr7vxlPJwipzEAdfqWnQDnjknUlxfRgnYO1l5LFZaVrN24kTXnseZShVRe2JuYDB1a6dmqMzBVuF8/QcD3STmNLbr2EKF3wEfv3BQVP4PRrHZxfYsHjgxHowSXrzXhx2enE3GvkXOMu1ZXwBMyYjMEyectzkEcGAymcC7WheMaHs+MCoJ5gYCPK11Zox3RiStx/O3GMDXWa36bJAymnflAqtcFX82oG7fDsEm3d93pG7e1acignP8tlpgApLFL94E4TYnrzQ348U5Dno4PFWs2GPmt8BvRN/y1kzjOWcYgrctI9Aei7Dsdtr5NjrTAquhuo1ijyqJNrfPi9uzq2lVr3pe7RM+tSb0+rD6MTtbLYKFlgY077LwMGuX7Ut1hycHTxkiqJSl+Xs6lF0yTzWuxpSM1nlBnNs8tj57CNQ4QnRaoRABerv9143N2mkygQXfbQ24KIo7Fi7dxChs4qCRbX4YYQb2kHvUBWvYP+d2LWTrk6Fvva39B6bPM1LdaLdkVmluyrCjXeKkv6ISJnAHDQ4pU1PMF7Gtith9WOEr0OiT/DZC0tqqpHh8YYWKC8F0bOicHOmnb6Cy0XHVuhMTK1f9hGcFZXPnyB0duwZJmde8EaJu2Jaq7D6LnxX3fp7oU/QwBySZnJs/P5G9N9XiGPqdONrc2Gm5bO4qdrQnfEgX67XrOZu3GYxHrdY1uIpaxoUFPH7WwJBiucIigtVwBZjfPTorjy/Zs3xm/czd4SXo0Dd8tSd3Ecdd2T3lsaO3mifTb1DfXxMWuAEdCMWcnRqVpiiaSpQDEYzDepMfx875LBqyi6Ol/WDuSxbhKToDHSoWGi0P3bD3eY1b3u+Tm5yGU/7IQsn1569TLfVAd03qsfQr13pSTjuAw1dWLIQqkeiI0Mw9MDNfX8PIOS6cJYWtv4kX82Wq6bo/ZDBNVe1Nxb/bKuByJnbmN7ZiN6ehsNkIUJaAWGOQflUbKnNWr6P8LIR9u+e77h/ZinWJJ14bda1Ni+h5b3sccpRU7gCf9/PMO28rXVuPmgjhZfuKj0If39OmkVtMHq0/BtXOVmWw7rnsKfzwOJnrvgqInZgLGp+PUSjOXC9BU6n58iwSVfxGExbRKp3odMImJJJXPmbwT9fsoX6RTdRYrZlOYZsrozS5rPZQeKyS8lxCIxSgOVxJCxVWHGQqqAhP+KA7S8RifMoKaOu+4qTglolYL3Fe0nxFi3Az1Az6T7q3T1migcWGlCSiXT5L9h66CAJxjT5Bm2XXj0upe7ur3qrqftsUgFxXRT3rTt/ol85dvtnA8i7vVZRs49s/sqQ6OXHaX1/PLwArUn/avBqZjtZ/zexY8nv3UWd3F8XeIbVB4vscGpNs9cKBk4cf4x+aDsxN4ypaVUj6w+xNC9CupZrSlJpDkcz6xvq4JA7XDq9yyg4XU7HX8ELFY406DzOmc+4jAc8dXaUkENOW0PL1hmtuNc8pGma6v0+jtykb065i1C9u1qpUtsVAPGjgQ0v+PeEw4nwXnwQ7R+1p98hUOl2kUQHGcJ+5mmLLtR5s+maCt59U1/7Ml7b/Smp2tcBzYsmZXkfaZf/m8D8qkrIhAbdmivv7eGhiYePCbQvdB6Nx2koZ8xO7OXbZLX4S8OnKnHjJQ9ghMQhIL0Jd1+pKTSqctOqJQxT2f/ZTzxV8tV+kHYQqF0/abQ98Om+2gdHRPvhiBuXIuc9ttqLWQvXz3UDqmrno+DKWStn/MzaFcyYwRqN6M/Omk5/pRGZM8BYQoESu6Fke28q0T/8KVyUvsQnLIHZTr/omVkZLrz5BJGtdAPVYpCUvdZzYtfTdQc4Jubhdji1REaVZmPsFEM/SOYZ7Haa7B2wViC1FceCaH+OFSrER4l/nekJ/Fwaz341pc/ysEkPw3t5BEZfut41Q8zF/JWt2hDiCEk+pX8Td3jwEnRGWGxlP8RYB3/jn/MDQKyjP4vBxK7fGLsOEHyqFySeVLBPZG6f3J3dt1agyumDWAj2TlYNIMp1jCMQ5+E4Zd2W6dtBTjvd6DN+2ifn37mGX4TfJu0TjLy/CNc3tP3A3kuKCkxXnFx3EMgtGuAhJUMvFA5O+26FFTXkGZWujoa7yL7jf81eKB06x28DotxLhp1Ws0LJjbuzaZkXtStAGvBTGL6hrv9DFSCuQKGbeMmF+1zOsBMP3xuZ3FO7nyQVgohxAPC1l0RRrH4kIq75N3+q2S4RsVwVosPYSYTqFueJP3ipYqOiK9jp9AYZfuD1b3HjnOZv4Pn3oQdXKr7fqTnDUl+aPIYKM+HFtD2e2n45zfaoN+L2APHmr2v7HV2w8m0TVlmw5jVYLQ07GKi9bqnFEQETmSOkGppFJrMUeFPFI48rpyTlEXtIvlyHr6Mes78dKrIt7LwDXnEqpXekHvcoE1XpesTMle+8H9l/lKJW3DQQFDpCf8M0vibWNHS+F5Xd+CG5/QrZ6aHNl0NhI7/oPK5WWWFpNwdHbCJV/86FnbEzs8E15jy0MWhcNEXAAFOUoFe1+OZsy40ajThu6TdLxLtz24Ql8oPT3yaAeJxUkwcTGQA59U8T/QDOipI/F1aFY8XPgbLl2a+/NBeFg5RbwKtK4fFDCXmMaNX9g3bSul4XyFgrYLUTSOEdHBG5obEKza+SzhzjPd8ByBMO62SmnSe7xVWGZWwP1u7qNa/Ua0Zr9OIn5EtWZmMYO6hpv0IMF7V9/yuUJN3TA4hmx9JQSRK0rwh6+I5B3uxfCHEyMNGD1pEmTNXNsbk8xeZ7KxhaYwK1YWmK681Y/urVrGmLw6BxS1X3sPz2pBDIniHQNih4Mxz0dy8d5fph6nZsfPYJ8h2oXvR+x8r1zt5o2P/mNK1bOnqinIvHuNuKxd9kYYxcK5UH1vdhHx6nULH74KOxk3Liq/nQEk1nUaNxpBpgYl8DT2u5dzPwXhck8+H9jk/o=",
      "famille": {
        "id": 4,
        "name": "Gâteau morceau",
        "description": "Gâteau en morceau",
        "prodSaison": 200,
        "prodSaisonAttein": 140,
        "nbrProd": null
      },
      "showRecette": false
    }
  ];
  produitToEdit: any;

  statuses: NbComponentStatus = 'info';
  ajouterProduitBtnLabel: String = 'Ajouter Produit';
  btnComanderStatus: NbComponentStatus = 'success';
  btnComanderShape: NbComponentShape = 'round';
  btnComanderSize: NbComponentSize = 'small';

  btnRecetteStatus: NbComponentStatus = 'primary';
  btnRecetteShape: NbComponentShape = 'round';
  btnRecetteSize: NbComponentSize = 'small';
  btnCloseRecetteStatus: NbComponentStatus = 'danger';
  btnCloseRecetteShape: NbComponentShape = 'round';
  btnCloseRecetteSize: NbComponentSize = 'small';
  quantite: number = 0;

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  constructor(private themeService: NbThemeService, private windowService: NbWindowService, private produitService: ProduitService,
              private familleServ :FamilleService,
              private matPremServ:MatpremService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
  openFormHandler() {
    this.produitToEdit = { status: 'add' };
    if (!this.openProductForm) {
      this.openProductForm = true
      this.statuses = 'danger';
      this.ajouterProduitBtnLabel = "Fermer l'ajout"
    } else {
      this.statuses = 'info';
      this.ajouterProduitBtnLabel = "Ajouter Produit"
      this.openProductForm = false
    }
  }
  editerAction(prod) {
    this.produitToEdit = { ...prod, status: 'edit' };
    this.openProductForm = true
    this.statuses = 'danger';
    this.ajouterProduitBtnLabel = "Fermer la configuration"


  }
  ngOnInit(): void {
  this.getProducts();
  }
  getProducts(){
    this.produitService.retreiveAllProduit().subscribe((data) => {
      const array :any[]=data
      array.forEach(elm =>{
         elm.photo = "https://files.meilleurduchef.com/mdc/photo/recette/gateau-anges-surprise/gateau-anges-surprise-640.jpg"
          elm.showRecette = false;
        })
      this.produits = array.reverse();

    })
  }
  
  showRecetteHandler(prod) {
    this.produits.map(product => {
      prod.id === product.id ? product.showRecette = true : null;
    })
  }
  closeRecetteHandler(prod) {
    this.produits.map(product => {
      prod.id === product.id ? product.showRecette = false : null;
    })
  }

  openWindow(contentTemplate, produit) {

    this.windowService.open(
      contentTemplate,
      {
        title: "ordre de production pour " + produit.name,
        context: {

          produit: produit
        },
      },
    );

  }
  orderProdHandler(prod) {
    console.log("ORDRE PROD", prod, this.quantite)

  }

}
