(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['session', '$state'];

  function SidebarController(session, $state) {
    var vm = this;

    vm.menu = [{
      name: 'Pagamento',
      state: 'pagamento',
      type: 'link'
    }, {
      name: 'Casal',
      state: 'casal',
      type: 'link'
    }, {
      name: 'Convite',
      type: 'toggle',
      pages: [{
        name: 'Configurar',
        state: 'cerimonia',
        type: 'link'
      }, {
        name: 'Save the Date',
        state: 'savethedate',
        type: 'link'
      }, {
        name: 'Aplicativo',
        state: 'aplicativo',
        type: 'link'
      }, {
        name: 'Enviar',
        state: 'enviarConvite',
        type: 'link'
      }]
    }, {
      name: 'Informações Adicionais',
      type: 'toggle',
      pages: [{
          name: 'Recepção',
          state: 'recepcao',
          type: 'link'
        }, {
          name: 'Dicas de Hotel',
          state: 'hotel',
          type: 'link'
        }, {
          name: 'Dicas de Salão de Beleza',
          state: 'salao',
          type: 'link'
        }, {
          name: 'Lista de Presentes',
          state: 'presentes',
          type: 'link'
        }, {
          name: 'Cardápio',
          state: 'cardapio',
          type: 'link'
        },
        {
          name: 'Cotas de Lua de Mel',
          state: 'cotas',
          type: 'link'
        }
      ]
    }, {
      name: 'Convidados',
      type: 'toggle',
      pages: [{
        name: 'Cadastrar',
        state: 'cadastrarConvidados',
        type: 'link'
      }, {
        name: 'Confirmados',
        state: 'convidadosConfirmados',
        type: 'link'
      }]
    }, {
      name: 'Estatísticas',
      state: 'estatisticas',
      type: 'link'
    }];
    vm.openedSection = null;
    vm.userName = session.user.casal.nomeUser;

    vm.IsSectionSelected = IsSectionSelected;
    vm.Sair = Sair;
    vm.ToggleSection = ToggleSection;

    Activate();

    ////////////////

    function Activate() {}

    function IsSectionSelected(section) {
      return vm.openedSection === section;
    }

    function Sair() {
      session.user.id = null;
      session.SaveState();
      session.Remove();
    }

    function ToggleSection(section) {
      vm.openedSection = (vm.openedSection === section ? null : section);
    }

  }
})();