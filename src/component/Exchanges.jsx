import React, { useEffect, useState } from "react";
// import axios, {Axios} from 'axios'
import axios from "axios";
import { server } from "..";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        //   const { data } = await axios.get(`${server}/exchanges?per_page=250`);
        // const {data} = await axios.get(`https://api.coingecko.com/api/v3/exchanges`)
        console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
          setError(true)
        setLoading(false)
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <Error message = {"error while loading"}/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              // <div>{i.name}</div>
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
