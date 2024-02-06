import './Kanban.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Card from '../Card'


const Kanban = ({ data, onDragEnd, deleteTaskHandler }) => {

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban">
        {
          data.map(section => (
            <Droppable
              key={section.id}
              droppableId={section.id}
            >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className='kanban__section'
                  ref={provided.innerRef}
                >
                  <div className="kanban__section__title">
                    {section.title}
                  </div>
                  <div className="kanban__section__content">
                    {
                      section.tasks.map((task, index) => (
                        task.visible &&
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                opacity: snapshot.isDragging ? '0.5' : '1'
                              }}
                            >
                              <Card task={task} deleteTaskHandler={deleteTaskHandler} />
                            </div>
                          )}
                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))
        }
      </div>
    </DragDropContext>
  )
}

export default Kanban