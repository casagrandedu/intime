CREATE TABLE `intime`.`usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(70) NOT NULL
);

ALTER TABLE `intime`.`usuarios`
  ADD PRIMARY KEY (`idUsuario`);

ALTER TABLE `intime`.`usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;
