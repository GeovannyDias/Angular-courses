# Crud Firebase Bootstrap (Angular 11)

## bootswatch

* **https://bootswatch.com/**
* **https://bootswatch.com/cosmo/**

```
npm i bootswatch
npm i bootstrap
npm i jquery
npm i @popperjs/core

npm i bootswatch bootstrap jquery @popperjs/core

importar variable bootswatch en styles.scss (Theme → cosmo)

@import "~bootswatch/dist/cosmo/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/cosmo/bootswatch";

importar bootstrap en script agular.json

"scripts": 
[
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]

```

## Componentes, Modules

```

ng g c shared/components/header --module app --skipTests (Componente)
ng g m shared/components/header --module app (Módulo)


Páginas con rutas y módulos:

ng g m pages/employees/list --module app --route list
ng g m pages/employees/new --module app --route new
ng g m pages/employees/details --module app --route details
ng g m pages/employees/edit --module app --route edit

Encapsular en un componente:

ng g c shared/components/employee-form --module app --skipTests
ng g m shared/components/employee-form --module app

Servicios:

 ng g s services/employees --skipTests

Instalar Firebase a través de Schematics:

Primero debe estar creado el proyecto de firebase, en enviroment.ts
En la consola se debe estar logueado en firebase con las herramientas de firebase-tools
ya que solicitara seleccionar el proyecto

ng add @angular/fire


https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
https://fireship.io/snippets/install-angularfire/




```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```


