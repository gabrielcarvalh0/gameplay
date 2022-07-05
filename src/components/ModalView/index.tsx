import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';
import { styles } from './styles';


type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}



export function ModalView({ children
    , closeModal,
    ...rest }: Props) {

    return (
        <Modal
            transparent
            animationType='slide'
            // essa propriedade deixa o statusbar que é a abinha do topo atras do modal
            statusBarTranslucent
            {...rest}
        >

            {/* Essa propriedade executa alguma ação, nao tem efeito na tela  */}
            <TouchableWithoutFeedback onPress={closeModal}>

                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>


        </Modal>

    )
}