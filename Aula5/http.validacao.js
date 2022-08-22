const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
    throw new Error(erro.message)
}

async function checaStatus(arraysURLs){
    //promises async await
    try{
        const arrayStatus = await Promise
            .all(arraysURLs
                .map(async url => {
                    const res = await fetch(url)
                    return res.status

        }))
        return arrayStatus
    }catch(erro){
        manejaErros(erro)
    }
}


function geraArraysDeURLs(arrayLinks){
    return arrayLinks
        .map(objectoLink => Object
                .values(objectoLink).join())
}


async function validaURLs(arrayLinks){
    const links =  geraArraysDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    //spread operator
    const resultados = arrayLinks.map((objeto, indice) =>  ({
        ...objeto,
        status: statusLinks[indice]
    }))

    return resultados
}

module.exports = validaURLs