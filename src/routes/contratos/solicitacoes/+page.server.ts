/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Actions } from './$types';

export const actions = {
	criarSolicitacaoContrato: async ({ request }) => {
		const data = await request.formData();
		const dataSolicitante: any = data.get('solicitante');
		const dataEmpresa = data.get('empresa');

		console.log(data);
		const solicitante_nome = dataSolicitante[0];
		const solicitante_cargo = dataSolicitante[1];
		const solicitante_setor = dataSolicitante[2];
		const solicitante_id = dataSolicitante[4];

		const id_empresa_solicitante = dataEmpresa;

		const previsao_inicio_contrato = data.get('dataPrevisaoInicio');
		const prazo_contrato = data.get('prazoContrato');
		const prazo_contrato_periodo = data.get('prazoContratoPeriodo');
		const seguro_garantido = data.get('seguroGarantido');
		const retencoes_constratuais = data.get('retencaoContratual');
		// ---- text areas ----
		const contrato_objeto = data.get('textObjetoDoContrato');
		const contrato_obrigacoes_contratante = data.get('textObrigacoesLocatario');
		// ---- outras variaveis ----
		const mao_obra = data.get('maoDeObra');
		const data_da_solicitacao = data.get('dataDaSolicitacao');
	}
} satisfies Actions;
