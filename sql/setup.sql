DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quantity INTEGER CHECK (quantity > 0)
);

-- INSERT INTO orders (quantity)
--   VALUES (10);