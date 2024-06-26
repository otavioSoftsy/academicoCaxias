const contaId = sessionStorage.getItem('contaId')

$(document).ready(function() {

	var tamanhoBody = $("body").width()

	if (tamanhoBody < 768) {
		$("#qualPreencher").show()
		$("#qualPreencherSwitch").hide()
		$('input[name="qualPreencher"]').attr("required", false)
	} else {
		$("#qualPreencher").hide()
		$("#qualPreencherSwitch").show()
		$('input[name="qualPreencher"]').attr("required", true)
	}



	$('#municipioNascimentoId').select2();

	if ($('input[id="qualPreencher"]').is(':checked')) {
		$("#certidaoCasamento").hide()
		$("#certidaoNascimento").show()
	} else {
		$("#certidaoNascimento").hide()
		$("#certidaoCasamento").show()
	}

	$.ajax({
		url: url_base + '/tiposIngresso/conta/' + contaId,
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {

			if (item.ativo == "S") {
				$('#tipoIngressoId').append($('<option>', {
					value: item.idTipoIngresso,
					text: item.tipoIngresso,
					name: item.tipoIngresso
				}));
			}

		});
	})

	$.ajax({
		url: url_base + '/raca',
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			if (item.ativo == "S") {
				$('#racaId').append($('<option>', {
					value: item.idRaca,
					text: item.raca,
					name: item.raca
				}));
			}
		});
	})

	$.ajax({
		url: url_base + '/paises',
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {

			$('#paisNascimentoId').append($('<option>', {
				value: item.idPais,
				text: item.nomePais,
				name: item.nomePais
			}));

			$('#paisResidenciaId').append($('<option>', {
				value: item.idPais,
				text: item.nomePais,
				name: item.nomePais
			}));

		});


	})



	$.ajax({
		url: url_base + '/nacionalidade',
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			$('#nacionalidadeId').append($('<option>', {
				value: item.idNacionalidade,
				text: item.nacionalidade,
				name: item.nacionalidade
			}));
		});
	})



	$.ajax({
		url: url_base + '/uf',
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			$('#ufNascimentoId').append($('<option>', {
				value: item.idUf,
				text: item.codUf + " - " + item.nomeUf,
				name: item.codUf
			}));

			$('#rgUfEmissorId').append($('<option>', {
				value: item.idUf,
				text: item.codUf + " - " + item.nomeUf,
				name: item.codUf
			}));

			$('#rneUfEmissorId').append($('<option>', {
				value: item.idUf,
				text: item.codUf + " - " + item.nomeUf,
				name: item.codUf
			}));

			$('#certidaoNascimentoUfCartorioId').append($('<option>', {
				value: item.idUf,
				text: item.codUf + " - " + item.nomeUf,
				name: item.codUf
			}));

			$('#certidaoCasamentoUfCartorioId').append($('<option>', {
				value: item.idUf,
				text: item.codUf + " - " + item.nomeUf,
				name: item.codUf
			}));
		});
	})






	// Função para capturar os dados do formulário ao ser submetido
	$('#formSubmit').submit(function(event) {

		event.preventDefault();

		let cpf = $('#cpf').val().replace(/[^\d]+/g, '')

		if (cpf == "") {
			var dadosFormulario = {
				pessoaDTO: {
					contaId: contaId,
					nomeCompleto: $('#nomeCompleto').val(),
					nomeMae: $('#nomeMae').val(),
					nomePai: $('#nomePai').val(),
					sexo: $('input[name="sexo"]:checked').val(),
					dtNascimento: $('#dtNascimento').val(),
					cpf: null,
					racaId: $('#racaId').val(),
					paisNascimentoId: $('#paisNascimentoId').val(),
					/*ufNascimentoId: $('#ufNascimentoId').val(),*/
					municipioNascimentoId: $('#municipioNascimentoId').val(),
					nacionalidadeId: $('#nacionalidadeId').val(),
					"nacionalidade": $('#nacionalidadeId').find(":selected").text().substring(0, 3),
					estadoCivil: $('input[name="estadoCivil"]:checked').val(),
					rgNumero: $('#rgNumero').val().replace(/[^\d]+/g, ''),
					rgDataExpedicao: $('#rgDataExpedicao').val(),
					rgOrgaoExpedidor: $('#rgOrgaoExpedidor').val(),
					rgUfEmissorId: $('#rgUfEmissorId').val(),
					certidaoNascimentoNumero: $('#certidaoNascimentoNumero').val(),
					certidaoNascimentoCidadeCartorio: $('#certidaoNascimentoCidadeCartorio').val(),
					certidaoNascimentoCartorio: $('#certidaoNascimentoCartorio').val(),
					/*certidaoNascimentoUfCartorioId: $('#certidaoNascimentoUfCartorioId').val(),*/
					certidaoNascimentoDataEmissao: $('#certidaoNascimentoDataEmissao').val(),
					certidaoNascimentoFolha: $('#certidaoNascimentoFolha').val(),
					certidaoNascimentoLivro: $('#certidaoNascimentoLivro').val(),
					certidaoNascimentoOrdem: $('#certidaoNascimentoOrdem').val(),
					certidaoCasamentoNumero: $('#certidaoCasamentoNumero').val(),
					certidaoCasamentoCartorio: $('#certidaoCasamentoCartorio').val(),
					/*certidaoCasamentoUfCartorioId: $('#certidaoCasamentoUfCartorioId').val(),*/
					certidaoCasamentoCidadeCartorio: $('#certidaoCasamentoCidadeCartorio').val(),
					certidaoCasamentoFolha: $('#certidaoCasamentoFolha').val(),
					certidaoCasamentoLivro: $('#certidaoCasamentoLivro').val(),
					certidaoCasamentoOrdem: $('#certidaoCasamentoOrdem').val(),
					certidaoCasamentoDataEmissao: $('#certidaoCasamentoDataEmissao').val(),
					rneNumero: $("#rneNumero").val(),
					rneOrgaoExpedidor: $("#rneOrgaoExpedidor").val(),
					rneUfEmissorId: $("#rneUfEmissorId").val(),
					rneDataExpedicao: $("#rneDataExpedicao").val(),
					"certidaoNascimentoMunicipioCartorioId": $('#certidaoNascimentoMunicipioCartorioId').val(),
					"certidaoCasamentoMunicipioCartorioId": $('#certidaoCasamentoCidadeCartorioId').val()
				},
				candidatoDTO: {
					contaId: contaId,
					"pessoaId": 2,
					"candidato": parseInt(Math.random() * 100000),
					"ofertaConcursoId": null,
					"tipoIngressoId": $('#tipoIngressoId').val(),
					"classificacao": null,
					"aluno": null,
					"aprovado": null,
					"usuarioAprovacaoId": null
				}


			};

		} else {
			var dadosFormulario = {
				pessoaDTO: {
					contaId: contaId,
					nomeCompleto: $('#nomeCompleto').val(),
					nomeMae: $('#nomeMae').val(),
					nomePai: $('#nomePai').val(),
					sexo: $('input[name="sexo"]:checked').val(),
					dtNascimento: $('#dtNascimento').val(),
					cpf: cpf,
					racaId: $('#racaId').val(),
					paisNascimentoId: $('#paisNascimentoId').val(),
					/*ufNascimentoId: $('#ufNascimentoId').val(),*/
					municipioNascimentoId: $('#municipioNascimentoId').val(),
					nacionalidadeId: $('#nacionalidadeId').val(),
					"nacionalidade": $('#nacionalidadeId').find(":selected").text().substring(0, 3),
					estadoCivil: $('input[name="estadoCivil"]:checked').val(),
					rgNumero: $('#rgNumero').val().replace(/[^\d]+/g, ''),
					rgDataExpedicao: $('#rgDataExpedicao').val(),
					rgOrgaoExpedidor: $('#rgOrgaoExpedidor').val(),
					rgUfEmissorId: $('#rgUfEmissorId').val(),
					certidaoNascimentoNumero: $('#certidaoNascimentoNumero').val(),
					certidaoNascimentoCidadeCartorio: $('#certidaoNascimentoCidadeCartorio').val(),
					certidaoNascimentoCartorio: $('#certidaoNascimentoCartorio').val(),
					/*certidaoNascimentoUfCartorioId: $('#certidaoNascimentoUfCartorioId').val(),*/
					certidaoNascimentoDataEmissao: $('#certidaoNascimentoDataEmissao').val(),
					certidaoNascimentoFolha: $('#certidaoNascimentoFolha').val(),
					certidaoNascimentoLivro: $('#certidaoNascimentoLivro').val(),
					certidaoNascimentoOrdem: $('#certidaoNascimentoOrdem').val(),
					certidaoCasamentoNumero: $('#certidaoCasamentoNumero').val(),
					certidaoCasamentoCartorio: $('#certidaoCasamentoCartorio').val(),
					/*certidaoCasamentoUfCartorioId: $('#certidaoCasamentoUfCartorioId').val(),*/
					certidaoCasamentoCidadeCartorio: $('#certidaoCasamentoCidadeCartorio').val(),
					certidaoCasamentoFolha: $('#certidaoCasamentoFolha').val(),
					certidaoCasamentoLivro: $('#certidaoCasamentoLivro').val(),
					certidaoCasamentoOrdem: $('#certidaoCasamentoOrdem').val(),
					certidaoCasamentoDataEmissao: $('#certidaoCasamentoDataEmissao').val(),
					rneNumero: $("#rneNumero").val(),
					rneOrgaoExpedidor: $("#rneOrgaoExpedidor").val(),
					rneUfEmissorId: $("#rneUfEmissorId").val(),
					rneDataExpedicao: $("#rneDataExpedicao").val(),
					"certidaoNascimentoMunicipioCartorioId": $('#certidaoNascimentoMunicipioCartorioId').val(),
					"certidaoCasamentoMunicipioCartorioId": $('#certidaoCasamentoCidadeCartorioId').val()
				},
				candidatoDTO: {
					contaId: contaId,
					"pessoaId": 2,
					"candidato": parseInt(Math.random() * 100000),
					"ofertaConcursoId": null,
					"tipoIngressoId": $('#tipoIngressoId').val(),
					"classificacao": null,
					"aluno": null,
					"aprovado": null,
					"usuarioAprovacaoId": null
				}

			};

		}

		console.log(cpf)


		// Aqui você pode acessar os valores dos campos de input usando jQuery

		// Aqui você pode enviar o objeto formData para onde for necessário, como uma requisição AJAX
		// Exemplo:

		/*$.ajax({
			url: url_base + '/pessoas',
			type: "POST",
			data: JSON.stringify(dadosFormulario),
			contentType: "application/json; charset=utf-8",
			beforeSend: function() {
				Swal.showLoading()
			},
			error: function(e) {
				Swal.close()
				console.log(e)
				console.log(e.responseJSON)
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Não foi possível realizar esse comando!",
				});
			}
		}).done(function(data) {
			Swal.close()
			Swal.fire({
				title: "Editado com sucesso",
				icon: "success",
			})
			
		});*/

		localStorage.setItem('jsonAluno', JSON.stringify(dadosFormulario))
		localStorage.setItem('numeroReserva', dadosFormulario.candidatoDTO.candidato)
		window.location.href = "endereco-aluno";
	});
})


$('#ufNascimentoId').change(() => {
	$("#municipioNascimentoId").attr("disabled", false)
	$("#municipioNascimentoId").empty()
	$("#municipioNascimentoId").append("<option selected disabled>Selecione uma opção</option>")
	$.ajax({
		url: url_base + '/municipio/uf/' + $('#ufNascimentoId').val(),
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			$('#municipioNascimentoId').append($('<option>', {
				value: item.idMunicipio,
				text: item.nomeMunicipio,
				name: item.nomeMunicipio
			}));
		});


	})
})

$('#certidaoCasamentoUfCartorioId').change(() => {
	$("#certidaoCasamentoCidadeCartorioId").attr("disabled", false)
	$("#certidaoCasamentoCidadeCartorioId").empty()
	$("#certidaoCasamentoCidadeCartorioId").append("<option selected disabled>Selecione uma opção</option>")
	$.ajax({
		url: url_base + '/municipio/uf/' + $('#certidaoCasamentoUfCartorioId').val(),
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			$('#certidaoCasamentoCidadeCartorioId').append($('<option>', {
				value: item.idMunicipio,
				text: item.nomeMunicipio,
				name: item.nomeMunicipio
			}));
		});


	})
})


$('#certidaoNascimentoUfCartorioId').change(() => {
	$("#certidaoNascimentoMunicipioCartorioId").attr("disabled", false)
	$("#certidaoNascimentoMunicipioCartorioId").empty()
	$("#certidaoNascimentoMunicipioCartorioId").append("<option selected disabled>Selecione uma opção</option>")
	$.ajax({
		url: url_base + '/municipio/uf/' + $('#certidaoNascimentoUfCartorioId').val(),
		type: "get",
		async: false,
	}).done(function(data) {
		$.each(data, function(index, item) {
			$('#certidaoNascimentoMunicipioCartorioId').append($('<option>', {
				value: item.idMunicipio,
				text: item.nomeMunicipio,
				name: item.nomeMunicipio
			}));
		});


	})
})



$('input[name="isRne"]').click(function() {
	if ($(this).is(':checked')) {
		$("#rneSec").show();
	} else {
		$("#rneSec").hide();
	}
});

$('input[name="qualPreencher"]').click(function() {
	if ($(this).is(':checked')) {
		$("#certidaoNascimento").show();
		$("#certidaoCasamento").hide();
		$("[name='certidaoNascimentoNumero']").attr("required", true);
		$("[name='certidaoNascimentoCidadeCartorio']").attr("required", true);
		$("[name='certidaoNascimentoCartorio']").attr("required", true);
		$("[name='certidaoNascimentoUfCartorioId']").attr("required", true);
		$("[name='certidaoNascimentoDataEmissao']").attr("required", true);
		$("[name='certidaoNascimentoFolha']").attr("required", true);
		$("[name='certidaoNascimentoLivro']").attr("required", true);
		$("[name='certidaoNascimentoOrdem']").attr("required", true);

		$("[name='certidaoCasamentoNumero']").attr("required", false);
		$("[name='certidaoCasamentoCartorio']").attr("required", false);
		$("[name='certidaoCasamentoUfCartorioId']").attr("required", false);
		$("[name='certidaoCasamentoCidadeCartorio']").attr("required", false);
		$("[name='certidaoCasamentoFolha']").attr("required", false);
		$("[name='certidaoCasamentoLivro']").attr("required", false);
		$("[name='certidaoCasamentoOrdem']").attr("required", false);
		$("[name='certidaoCasamentoDataEmissao']").attr("required", false);

	} else {
		$("#certidaoNascimento").hide();
		$("#certidaoCasamento").show();
		$("[name='certidaoCasamentoNumero']").attr("required", true);
		$("[name='certidaoCasamentoCartorio']").attr("required", true);
		$("[name='certidaoCasamentoUfCartorioId']").attr("required", true);
		$("[name='certidaoCasamentoCidadeCartorio']").attr("required", true);
		$("[name='certidaoCasamentoFolha']").attr("required", true);
		$("[name='certidaoCasamentoLivro']").attr("required", true);
		$("[name='certidaoCasamentoOrdem']").attr("required", true);
		$("[name='certidaoCasamentoDataEmissao']").attr("required", true);

		$("[name='certidaoNascimentoNumero']").attr("required", false);
		$("[name='certidaoNascimentoCidadeCartorio']").attr("required", false);
		$("[name='certidaoNascimentoCartorio']").attr("required", false);
		$("[name='certidaoNascimentoUfCartorioId']").attr("required", false);
		$("[name='certidaoNascimentoDataEmissao']").attr("required", false);
		$("[name='certidaoNascimentoFolha']").removeattr("required", false);
		$("[name='certidaoNascimentoLivro']").attr("required", false);
		$("[name='certidaoNascimentoOrdem']").attr("required", false);

	}
});

$("#nacionalidadeId").on("blur", () => {
	if ($('#nacionalidadeId').find(":selected").text() != "Brasileiro" && $('#nacionalidadeId').find(":selected").text() != "Selecione uma opção") {
		$("#rne").show()
	} else {
		$("#rne").hide()
	}
})

function cpfValido(cpf) {
	cpf = cpf.replace(/[^\d]+/g, '');

	if (cpf.length != 11)
		return false;

	var soma = 0;
	var resto;
	for (var i = 1; i <= 9; i++) {
		soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
	}
	resto = (soma * 10) % 11;

	if ((resto == 10) || (resto == 11)) {
		resto = 0;
	}

	if (resto != parseInt(cpf.substring(9, 10))) {
		return false;
	}

	soma = 0;
	for (var i = 1; i <= 10; i++) {
		soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
	}
	resto = (soma * 10) % 11;

	if ((resto == 10) || (resto == 11)) {
		resto = 0;
	}

	if (resto != parseInt(cpf.substring(10, 11))) {
		return false;
	}

	return true;
}

function ValidarCpf() {
	const cpf = $('#cpf');
	const message = $("<p id='errMessage'></p>").text("CPF Inválido").css('color', '#FF0000');
	if (cpfValido(cpf.val())) {
		$("#btn-submit").removeAttr('disabled');
		cpf.removeClass('err-message')
		$('#errMessage').css('display', 'none')
	} else {
		if ($("#cardCpf").find('#errMessage').length > 0) {
			$('#errMessage').remove()
		}
		$("#btn-submit").attr("disabled", "disabled");
		cpf.addClass('err-message')
		$("#cardCpf").append(message)
		message.show()
	}

}
$("#cpf").blur(function() {
	ValidarCpf()
});



