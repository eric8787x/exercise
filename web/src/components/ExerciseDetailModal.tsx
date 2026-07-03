import { Descriptions, Modal, Tag } from 'antd';
import type { ExerciseViewModel } from '../types/exercise';

interface ExerciseDetailModalProps {
  exercise: ExerciseViewModel | null;
  open: boolean;
  onClose: () => void;
}

export function ExerciseDetailModal({ exercise, open, onClose }: ExerciseDetailModalProps) {
  const steps = exercise?.instruction_steps.zh?.length
    ? exercise.instruction_steps.zh
    : exercise?.instruction_steps.en ?? [];

  return (
    <Modal
      className="exercise-modal"
      open={open}
      onCancel={onClose}
      footer={null}
      width={980}
      centered
      destroyOnClose
      title={null}
    >
      {exercise && (
        <div className="modal-content">
          <div className="modal-media">
            {exercise.gifUrl ? <img src={exercise.gifUrl} alt={exercise.name} /> : <div>暂无 GIF</div>}
          </div>
          <div className="modal-info">
            <h2>{exercise.displayName}</h2>
            <Descriptions column={2} size="small">
              <Descriptions.Item label="部位">{exercise.displayCategory}</Descriptions.Item>
              <Descriptions.Item label="器械">{exercise.displayEquipment}</Descriptions.Item>
            </Descriptions>
            <div className="muscle-tags">
              <Tag className="primary-muscle-tag">{exercise.displayTarget}</Tag>
              {exercise.displaySecondaryMuscles.map((muscle, index) => (
                <Tag key={`${exercise.id}-${muscle}-${index}`}>{muscle}</Tag>
              ))}
            </div>
            <ol className="step-list">
              {steps.map((step, index) => (
                <li key={`${exercise.id}-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </Modal>
  );
}
