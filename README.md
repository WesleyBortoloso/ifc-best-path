### IFC - Campus Videira - Melhor Caminho
A implementação tem como objetivo utilizar o algortimo A* (A estrela) para encontrar o melhor caminho entre dois pontos dentro do IFC - Campus Videira, a origem e o destino.

Com base na planta do Campus conseguimos distribuir em grafos os principais pontos e os pontos auxiliares denominados de Encruzilhadas.

Juntamente aos pontos, atribuimos valores conforme a distância entre os pontos, isso possibilitou a utilização do algoritmo para calcular o caminho mais eficiente de acordo com os valores a serem percorridos.
O cálculo da distância foi feito em cima da planta do Campus utilizando a escala proposta:

<details>
  <summary>Processo de Medição</summary>

  ![image](https://github.com/user-attachments/assets/e8ddad88-4422-4a57-a658-c04fa60f3ff5)
</details>


Com base nos valores e nos pontos definidos conseguimos modelar em grafos o Campus IFC Videira:

<details>
  <summary>Modelo do Campus em grafos</summary>

  ![legenda](https://github.com/user-attachments/assets/96329fa2-952f-4f31-8540-0ffb442de374)
</details>

Você pode acessar esse projeto e procurar o melhor caminho via: https://wesleybortoloso.github.io/ifc-best-path/
