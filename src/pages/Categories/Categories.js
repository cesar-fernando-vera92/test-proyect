import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { getFirestore } from "../../firebase";

import "./Categories.scss";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categories } = useParams();

  // Traingo datos desde Firebase
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const itemsByCategory = itemCollection.where(
      "categories",
      "==",
      categories
    );

    itemsByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categories]);

  return (
    <div className="categories">
      <h1>Categoría {categories}</h1>
      {loading ? (
        <Loading text="Cargando productos..." />
      ) : (
        <div className="categories__list">
          {products.map((product) => {
            return <ItemDetail product={product} key={product.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
