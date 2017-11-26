package com.emporio.intime.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.emporio.intime.daos.TiposServicosDAO;
import com.emporio.intime.entidades.TiposServicos;

@Path("/tiposervico")
public class TiposServicosResource {
	
	@Inject
	private TiposServicosDAO dao;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<TiposServicos> getAll() {
		return dao.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public TiposServicos findById(@PathParam("id") Integer idTipoServico) {
		return dao.findById(idTipoServico);
	}

	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public TiposServicos atualizar(TiposServicos tipoServico) {
		return dao.atualizar(tipoServico);
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Integer idTipoServico) {
		dao.deletar(idTipoServico);
		return Response.ok("Serviço removido com sucesso!").build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public TiposServicos salvar(TiposServicos tipoServico) {
		return dao.salvar(tipoServico);
	}
}
