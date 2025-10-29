/* Função para converter bytes para MB */
/* exportando o módulo (funcao de conversão) para utilizar em qualquer outro arquivo */
export const converterByteToMb = (bytes) => {
    return (bytes / 1024 / 1024).toFixed(2);
}

