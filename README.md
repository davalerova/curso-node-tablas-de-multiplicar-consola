# Notas:

Esta es mi primer aplicación de consola con Node.

Clonar repositorio y luego instalar las dependencias:

```
npm install
```

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     La base para calcular su tabla              [number] [required]
  -l, --listar   Imprime por consola la tabla de la base
                                                      [boolean] [default: false]
  -h, --hasta    El valor hasta donde se imprimirá la tabla
                                               [number] [required] [default: 10]
```

Ejemplo de uso:

```
node app.js -b 2 -l -h 20
```

Se obtiene la siguiente salida:

```
=====================================
             Tabla del 2
=====================================
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
2 x 11 = 22
2 x 12 = 24
2 x 13 = 26
2 x 14 = 28
2 x 15 = 30
2 x 16 = 32
2 x 17 = 34
2 x 18 = 36
2 x 19 = 38
2 x 20 = 40

./salida/tabla_del_2.txt creado
```
